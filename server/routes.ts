import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        id: message.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Get all contact messages endpoint (for admin use)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({ success: true, data: messages });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  // Mark message as read endpoint
  app.patch("/api/contact-messages/:id/read", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid message ID" 
        });
      }

      const message = await storage.markMessageAsRead(id);
      if (!message) {
        return res.status(404).json({ 
          success: false, 
          message: "Message not found" 
        });
      }

      res.json({ success: true, data: message });
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to update message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
