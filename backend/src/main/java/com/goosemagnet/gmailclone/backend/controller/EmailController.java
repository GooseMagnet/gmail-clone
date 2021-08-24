package com.goosemagnet.gmailclone.backend.controller;

import com.goosemagnet.gmailclone.backend.model.EmailDto;
import com.goosemagnet.gmailclone.backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/emails")
@CrossOrigin(origins = "*")
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping
    public List<EmailDto> getAllEmails() {
        return emailService.getAllEmails();
    }

    @GetMapping("/{id}")
    public EmailDto getEmail(@PathVariable("id") String emailId) {
        return emailService.getEmailById(emailId);
    }

    @PostMapping
    public EmailDto createEmail(@RequestBody @Valid EmailDto emailDto) {
        return emailService.createEmail(emailDto);
    }

    @DeleteMapping("/{id}")
    public void deleteEmail(@PathVariable("id") String emailId) {
        emailService.deleteEmail(emailId);
    }
}
