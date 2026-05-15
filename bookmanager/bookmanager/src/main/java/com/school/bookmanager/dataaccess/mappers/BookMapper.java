package com.school.bookmanager.dataaccess.mappers;
import com.school.bookmanager.dataaccess.models.BookDTO;
import com.school.bookmanager.domain.entities.Book;
import java.util.stream.Collectors;

public class BookMapper {

    public static BookDTO toDTO(Book book) {
        BookDTO dto = new BookDTO();
        dto.setId(book.getId());
        dto.setTitle(book.getTitle());
        dto.setIsbn(book.getIsbn());
        dto.setCategory(book.getCategory());
        dto.setYearOfPublication(book.getYearOfPublication());
        dto.setAuthors(book.getAuthors().stream()
            .map(author -> author.getName())
            .collect(Collectors.toList()));
        return dto;
    }

    public static Book toEntity(BookDTO bookDTO) {
        Book book = new Book();
        book.setTitle(bookDTO.getTitle());
        book.setIsbn(bookDTO.getIsbn());
        book.setCategory(bookDTO.getCategory());
        book.setYearOfPublication(bookDTO.getYearOfPublication());
        return book;
    }
}
