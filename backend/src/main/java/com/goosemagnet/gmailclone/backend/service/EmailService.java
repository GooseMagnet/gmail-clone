package com.goosemagnet.gmailclone.backend.service;

import com.goosemagnet.gmailclone.backend.util.exception.ResourceNotFoundException;
import com.goosemagnet.gmailclone.backend.model.EmailDto;
import com.goosemagnet.gmailclone.backend.persistence.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class EmailService {

    private final EmailRepository emailRepository;

    @Autowired
    public EmailService(EmailRepository emailRepository) {
        this.emailRepository = emailRepository;
    }

    public List<EmailDto> getAllEmails() {
        return emailRepository.findAll();
    }

    public EmailDto getEmailById(String emailId) {
        return emailRepository
                .findById(emailId)
                .orElseThrow(() -> new ResourceNotFoundException("Email not found with id: [" + emailId + "]"));
    }

    public EmailDto createEmail(EmailDto emailDto) {
        emailDto.setDateSent(Instant.now());
        return emailRepository.save(emailDto);
    }

    public void deleteEmail(String emailId) {
        if (!emailRepository.existsById(emailId)) {
            throw new ResourceNotFoundException("Email not found with id: [" + emailId + "]");
        }
        emailRepository.deleteById(emailId);
    }
}
