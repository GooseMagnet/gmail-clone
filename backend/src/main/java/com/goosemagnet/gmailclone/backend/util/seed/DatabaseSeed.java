package com.goosemagnet.gmailclone.backend.util.seed;

import com.github.javafaker.Faker;
import com.goosemagnet.gmailclone.backend.model.EmailDto;
import com.goosemagnet.gmailclone.backend.persistence.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.time.Instant;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;
import java.util.stream.IntStream;

@Configuration
public class DatabaseSeed {

    private static final Integer TWENTY_YEARS = 175200;

    @Autowired
    private EmailRepository emailRepository;

//    @Bean
    public void seedEmails() {
        Faker faker = new Faker();
        ThreadLocalRandom threadLocalRandom = ThreadLocalRandom.current();
        IntStream.rangeClosed(1, 1000).forEach(ignored -> {
            String fromEmail = faker.internet().emailAddress();
            String toEmail = faker.internet().emailAddress();
            Instant dateSent = faker.date().past(TWENTY_YEARS, TimeUnit.HOURS).toInstant();
            String subject = faker.company().catchPhrase();
            String body = faker.rickAndMorty().quote();

            EmailDto emailDto = new EmailDto();
            emailDto.setFromEmail(fromEmail);
            emailDto.setToEmail(toEmail);
            emailDto.setDateSent(dateSent);
            emailDto.setSubject(subject);
            emailDto.setBody(body);
            emailDto.setRead(threadLocalRandom.nextBoolean());
            emailDto.setStar(threadLocalRandom.nextBoolean());
            emailDto.setImportant(threadLocalRandom.nextBoolean());
            emailRepository.save(emailDto);
        });
    }
}
