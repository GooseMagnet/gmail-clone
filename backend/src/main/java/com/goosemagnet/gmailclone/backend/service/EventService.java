package com.goosemagnet.gmailclone.backend.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.ListenableFutureCallback;

@Service
@Slf4j
public class EventService {

    private final KafkaTemplate<String, String> kafkaTemplate;

    @Value("${kafka.event.read.topic}")
    private String readEmailTopic;

    @Autowired
    public EventService(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void readEmail(String emailId) {
        ListenableFuture<SendResult<String, String>> future = kafkaTemplate.send(readEmailTopic, emailId);

        future.addCallback(new ListenableFutureCallback<>() {
            @Override
            public void onFailure(Throwable ex) {
                log.error("Unable to read email with Id: {}", emailId);
            }

            @Override
            public void onSuccess(SendResult<String, String> result) {
                log.info("Created event to read email with Id: {}", emailId);
            }
        });
    }
}
