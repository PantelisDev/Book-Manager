package com.school.bookmanager.domain.entities;
import java.time.LocalDate;
import java.util.ArrayList;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import java.util.List;

@Entity 
@Table(name = "authors")
public class Author {
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String nationality;
	private LocalDate dateOfBirth;
	
	public Author() { }

	public Author(String name, String nationality, LocalDate dateOfBirth) {
	    this.name = name;
	    this.nationality = nationality;
	    this.dateOfBirth = dateOfBirth;
	}
		
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	
	
	
	@Override
	public String toString() {
		return "Author [id=" + id + ", name=" + name + ", nationality=" + nationality + ", dateOfBirth=" + dateOfBirth
				+ ", books=" + books + "]";
	}



	@ManyToMany(mappedBy = "authors")
	private List<Book> books = new ArrayList<>();
		
	public List<Book> getBooks() {
	    return books;
	}

	public void setBooks(List<Book> books) {
	    this.books = books;
	}
		
}


	
