package com.goosemagnet.gmailclone.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.time.Instant;

@Document(collection = "emails")
@Data
@NoArgsConstructor
@ToString
public class EmailDto {

    @Id
    private String id;

    @Email(message = "From Email must be valid")
    private String fromEmail;

    @Email(message = "To Email must be valid")
    private String toEmail;

    @Size(max = 200)
    private String subject;

    private String body;

    private Instant dateSent;
}
