A full-stack web application for managing books and authors, built with Spring Boot and React.
Μια ολοκληρωμένη διαδικτυακή εφαρμογή για τη διαχείριση βιβλίων και συγγραφέων, κατασκευασμένη με SpringBoot και React.


Τεχνολογίες
- **Backend:** Java 21, Spring Boot, JPA, SQL Server
- **Frontend:** React, JavaScript, CSS
- **Docs:** Swagger UI

Χαρακτηριστικά
- Πλήρης CRUD για βιβλία και συγγραφείς
- Αναζήτηση, ταξινόμηση και σελιδοποίηση
- Responsive σχεδιασμός
- Google Material Design UI

Προαπαιτούμενα
- Java 21
- SQL Server με βάση δεδομένων που ονομάζεται `bookmanager`
- Node.js

Εγκατάσταση

### Backend
1. Άνοιξε το φάκελο `bookmanager/` στο Eclipse ή IntelliJ
2. Ενημέρωσε το `application.properties` με τα στοιχεία του SQL Server σου
3. Τρέξε το `BookmanagerApplication.java`

Frontend
1. Άνοιξε το φάκελο `bookmanager-ui/` στο terminal
2. Τρέξε `npm install`
3. Τρέξε `npm start`

Πρόσβαση
- Εφαρμογή: `http://localhost:3000`
- API: `http://localhost:8080`
- Swagger: `http://localhost:8080/swagger-ui/index.html`

Σημαντικό
Πριν τρέξεις το backend, ενημέρωσε το αρχείο
`bookmanager/src/main/resources/application.properties`:
- Άλλαξε το όνομα του server από `ACERASPIRE72022` στο δικό σου
- Ενημέρωσε το username και password αν είναι διαφορετικά
