package com.school.bookmanager.dataaccess.models;
import java.time.LocalDate;
import java.util.List;

public class AuthorDTO {
	
	private long id;
	private String name;
	private String nationality;
	private String dateOfBirth;
	private List<String> books;
	public long getId() {
		return id;
	}
	public void setId(long id) {
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
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String string) {
		this.dateOfBirth = string;
	}
	public List<String> getBooks() {
		return books;
	}
	public void setBooks(List<String> books) {
		this.books = books;
	}
	
	

}
