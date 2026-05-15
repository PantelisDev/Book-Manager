package com.school.bookmanager.dataaccess.services;
import com.school.bookmanager.dataaccess.mappers.BookMapper;
import com.school.bookmanager.dataaccess.models.BookDTO;
import com.school.bookmanager.domain.repositories.BookRepository;
import com.school.bookmanager.domain.entities.Book;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<BookDTO> getAllBooks() {
        return bookRepository.findAll().stream()
            .map(BookMapper::toDTO)
            .collect(Collectors.toList());
    }

    public BookDTO createBook(BookDTO bookDTO) {
        Book book = BookMapper.toEntity(bookDTO);
        return BookMapper.toDTO(bookRepository.save(book));
    }

    public BookDTO getBookById(Long id) {
        return BookMapper.toDTO(bookRepository.findById(id).orElseThrow());
    }

    public BookDTO updateBook(Long id, BookDTO bookDTO) {
        Book book = bookRepository.findById(id).orElseThrow();
        book.setTitle(bookDTO.getTitle());
        book.setIsbn(bookDTO.getIsbn());
        book.setCategory(bookDTO.getCategory());
        book.setYearOfPublication(bookDTO.getYearOfPublication());
        return BookMapper.toDTO(bookRepository.save(book));
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}