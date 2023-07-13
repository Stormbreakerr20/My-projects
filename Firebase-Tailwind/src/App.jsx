import { useEffect, useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Contactsarea from "./components/Contactsarea";
import AddAndUpdate from "./components/AddAndUpdate";

import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";

import useDisclosure from "./Hooks/useDisclosure";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoContacts from "./components/NoContacts";

function App() {
  const [contacts, setContacts] = useState([]);

  const { Open, isOpen, Close } = useDisclosure();

  // FIREBASE DATA EXTRACTION
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts"); // id name that was contact is this should match thats why contact

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          setFilter(contactList);
          return contactList;
        });
      } catch (error) {
        console.log("error");
      }
    };
    getContacts();
  }, []);

  const [filterContacts, setFilter] = useState([]);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Nav />
        <Search
          Open={Open}
          filterContacts={filterContacts}
          setFilter={setFilter}
          contacts={contacts}
        />
        {filterContacts.length === 0 ? (
          <NoContacts />
        ) : (
          <Contactsarea contacts={filterContacts} />
        )}
      </div>
      <AddAndUpdate isOpen={isOpen} Close={Close} />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
