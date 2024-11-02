import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css';

function App() {
  return (
    <>
      <Section>
        <h1 className="h1_title">Phonebook</h1>

        <div className="wrapper">
          <ContactForm />
          <SearchBox />
        </div>

        <ContactList />
      </Section>
    </>
  );
}

export default App;
