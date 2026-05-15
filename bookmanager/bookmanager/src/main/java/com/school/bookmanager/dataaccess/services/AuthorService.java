package com.school.bookmanager.dataaccess.services;
import com.school.bookmanager.dataaccess.mappers.AuthorMapper;
import com.school.bookmanager.dataaccess.models.AuthorDTO;
import java.time.LocalDate;
import com.school.bookmanager.domain.repositories.AuthorRepository; 
import com.school.bookmanager.domain.entities.Author;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthorService {
	private final AuthorRepository authorRepository;
	
	public AuthorService(AuthorRepository authorRepository) {
		this.authorRepository = authorRepository;
	
		
	}

	public List<AuthorDTO> getAllAuthors() {
	    return authorRepository.findAll().stream()
	        .map(AuthorMapper::toDTO)
	        .collect(Collectors.toList());
	}

	public AuthorDTO createAuthor(AuthorDTO authorDTO) {
	    Author author = AuthorMapper.toEntity(authorDTO);
	    return AuthorMapper.toDTO(authorRepository.save(author));
	}

	public AuthorDTO getAuthorById(Long id) {
	    return AuthorMapper.toDTO(authorRepository.findById(id).orElseThrow());
	}

	public AuthorDTO updateAuthor(Long id, AuthorDTO authorDTO) {
	    Author author = authorRepository.findById(id).orElseThrow();
	    author.setName(authorDTO.getName());
	    author.setNationality(authorDTO.getNationality());
	    author.setDateOfBirth(LocalDate.parse(authorDTO.getDateOfBirth()));
	    return AuthorMapper.toDTO(authorRepository.save(author));
	}

	public void deleteAuthor(Long id) {
	    authorRepository.deleteById(id);
	}
}



