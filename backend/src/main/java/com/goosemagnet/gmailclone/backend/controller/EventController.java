package com.goosemagnet.gmailclone.backend.controller;

import com.goosemagnet.gmailclone.backend.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "*")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/read/{emailId}")
    void readEmail(@PathVariable String emailId) {
        eventService.readEmail(emailId);
    }
}
