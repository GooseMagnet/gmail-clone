package com.goosemagnet.gmailclone.backend.persistence;

import com.goosemagnet.gmailclone.backend.model.EmailDto;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepository extends MongoRepository<EmailDto, String> {
}
