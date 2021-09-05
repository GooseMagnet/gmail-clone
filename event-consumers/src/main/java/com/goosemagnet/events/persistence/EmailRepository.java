package com.goosemagnet.events.persistence;

import com.goosemagnet.events.model.EmailDto;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepository extends MongoRepository<EmailDto, String> {
}
