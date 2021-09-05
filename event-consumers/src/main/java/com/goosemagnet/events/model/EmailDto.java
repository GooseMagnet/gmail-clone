package com.goosemagnet.events.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "emails")
@Data
@NoArgsConstructor
public class EmailDto {

    @Id
    private String id;
    private String fromEmail;
    private String toEmail;
    private String subject;
    private String body;
    private boolean isRead;
    private boolean isImportant;
    private boolean isStar;
    private Instant dateSent;
}
