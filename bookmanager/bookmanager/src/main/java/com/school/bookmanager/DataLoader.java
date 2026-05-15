package com.school.bookmanager;

import com.school.bookmanager.domain.entities.Book;
import com.school.bookmanager.domain.repositories.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final BookRepository bookRepository;

    public DataLoader(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public void run(String... args) {
        if (bookRepository.count() == 0) {
            bookRepository.save(new Book("Clean Code", "978-0132350884", "Technology", 2008));
            bookRepository.save(new Book("The Pragmatic Programmer", "978-0201616224", "Technology", 1999));
            bookRepository.save(new Book("1984", "978-0451524935", "Fiction", 1949));
            bookRepository.save(new Book("Sapiens", "978-0062316097", "History", 2011));
            bookRepository.save(new Book("The Great Gatsby", "978-0743273565", "Fiction", 1925));
            bookRepository.save(new Book("A Brief History of Time", "978-0553380163", "Science", 1988));
            bookRepository.save(new Book("Design Patterns", "978-0201633610", "Technology", 1994));
            bookRepository.save(new Book("To Kill a Mockingbird", "978-0061935466", "Fiction", 1960));
            bookRepository.save(new Book("Refactoring", "978-0201485677", "Technology", 1999));
            bookRepository.save(new Book("Brave New World", "978-0060850524", "Fiction", 1932));
            bookRepository.save(new Book("The Selfish Gene", "978-0198788607", "Science", 1976));
            bookRepository.save(new Book("Structure and Interpretation", "978-0262510875", "Technology", 1996));
            bookRepository.save(new Book("The Alchemist", "978-0062315007", "Fiction", 1988));
            bookRepository.save(new Book("Thinking Fast and Slow", "978-0374533557", "Psychology", 2011));
            bookRepository.save(new Book("The Art of War", "978-1599869773", "History", 2006));
            bookRepository.save(new Book("Harry Potter and the Philosopher's Stone", "978-0439708180", "Fiction", 1997));
            bookRepository.save(new Book("The Da Vinci Code", "978-0307474278", "Fiction", 2003));
            bookRepository.save(new Book("Introduction to Algorithms", "978-0262033848", "Technology", 2009));
            bookRepository.save(new Book("The Power of Habit", "978-0812981605", "Psychology", 2012));
            bookRepository.save(new Book("Cosmos", "978-0345539434", "Science", 1980));
            bookRepository.save(new Book("The Origin of Species", "978-0140432053", "Science", 1859));
            bookRepository.save(new Book("Don Quixote", "978-0060934347", "Fiction", 1605));
            bookRepository.save(new Book("The Odyssey", "978-0140268867", "Fiction", -800));
            bookRepository.save(new Book("Crime and Punishment", "978-0143058142", "Fiction", 1866));
            bookRepository.save(new Book("The Lean Startup", "978-0307887894", "Business", 2011));
            bookRepository.save(new Book("Zero to One", "978-0804139021", "Business", 2014));
            bookRepository.save(new Book("Atomic Habits", "978-0735211292", "Psychology", 2018));
            bookRepository.save(new Book("The Hitchhiker's Guide to the Galaxy", "978-0345391803", "Fiction", 1979));
            bookRepository.save(new Book("Dune", "978-0441013593", "Fiction", 1965));
            bookRepository.save(new Book("The Lord of the Rings", "978-0544003415", "Fiction", 1954));
        }
    }
}