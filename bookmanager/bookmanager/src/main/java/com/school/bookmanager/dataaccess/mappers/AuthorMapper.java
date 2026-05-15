package com.school.bookmanager.dataaccess.mappers;

import com.school.bookmanager.dataaccess.models.AuthorDTO;
import com.school.bookmanager.domain.entities.Author;
import java.time.LocalDate;
import java.util.stream.Collectors;

public class AuthorMapper {

    public static AuthorDTO toDTO(Author author) {
        AuthorDTO dto = new AuthorDTO();
        dto.setId(author.getId());
        dto.setName(author.getName());
        dto.setNationality(author.getNationality());
        dto.setDateOfBirth(author.getDateOfBirth().toString());
        dto.setBooks(author.getBooks().stream()
            .map(book -> book.getTitle())
            .collect(Collectors.toList()));
        return dto;
    }

    public static Author toEntity(AuthorDTO authorDTO) {
        Author author = new Author();
        author.setName(authorDTO.getName());
        author.setNationality(authorDTO.getNationality());
        author.setDateOfBirth(LocalDate.parse(authorDTO.getDateOfBirth()));
        return author;
    }
}