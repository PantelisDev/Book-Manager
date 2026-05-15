package com.school.bookmanager.domain.entities;
import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity 
@Table(name = "books")
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String isbn;
	private String category;
	private int yearOfPublication;
	public Long getId() {
		return id;
	}
	
	public Book() { }

	public Book(String title, String isbn, String category, int yearOfPublication) {
	    this.title = title;
	    this.isbn = isbn;
	    this.category = category;
	    this.yearOfPublication = yearOfPublication;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getYearOfPublication() {
		return yearOfPublication;
	}
	public void setYearOfPublication(int yearOfPublication) {
		this.yearOfPublication = yearOfPublication;
	}
	
	
	
	@Override
	public String toString() {
		return "Book [id=" + id + ", "
				+ "title=" + title + ", isbn=" + isbn + ", category=" + category
				+ ", yearOfPublication=" + yearOfPublication + "]";
	}



	@ManyToMany
	@JoinTable(
	    name = "book_authors",
	    joinColumns = @JoinColumn(name = "book_id"),
	    inverseJoinColumns = @JoinColumn(name = "author_id")
	)
	private List<Author> authors = new ArrayList<>();
	public List<Author> getAuthors() {
	    return authors;
	}
	public void setAuthors(List<Author> authors) {
	    this.authors = authors;
	}
}



