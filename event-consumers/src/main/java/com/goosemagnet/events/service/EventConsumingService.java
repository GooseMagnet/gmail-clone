package com.goosemagnet.events.service;

import com.goosemagnet.events.persistence.EmailRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class EventConsumingService {

    private final EmailRepository emailRepository;

    public EventConsumingService(EmailRepository emailRepository) {
        this.emailRepository = emailRepository;
    }

    @KafkaListener(topics = "gmail.events.read")
    public void listenGroupFoo(String emailId) {
        log.info("Received Message: {}", emailId);
        emailRepository.findById(emailId)
                .ifPresent(emailDto -> {
                    emailDto.setRead(true);
                    emailRepository.save(emailDto);
                });
    }
}
