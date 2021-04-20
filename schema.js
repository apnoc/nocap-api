const { gql } = require('apollo-server');

module.exports = gql`
   type  User {      
        HomePages:[HomePages!]
        Infrastructures:[Infrastructures!]
        Profiles:[Profiles!]
        Awards:[Awards!]
        Newss:[Newss!]
        Events:[Events!]
        Director:[Director!]
        Services:[Services!]     
    }
    type  HomePages {
        id: ID
        name: String        
        p: String
        button: String
        img: String
        Wrapper:[Wrapper!]
    }
    type  Wrapper {
        id: ID
        header: String        
        img: String
        paragraph: String
    } 

    type  Infrastructures {
        id: ID
        title: String     
        paragraph: [paragraph1!]
    } 

    type  paragraph1 {
        id: ID
        p: String     
        
    } 

    type  Profiles {
        id: ID
        title: String     
        paragraph: [paragraph!]
    } 

    type  paragraph {
        id: ID
        p: String     
        
    } 

    type  Awards {
        id: ID
        img: String        
        publish: String
        title: String
        text: String
    }

    type  Newss {
        id: ID
        img: String        
        publish: String
        title: String
        text: String
    }

    type  Events {
        id: ID
        img: String        
        publish: String
        title: String
        text: String
    }

    type  Director {
        id: ID
        img: String        
        publish: String
        title: String
        text: String
    }

    type  Services {
        id: ID
        imgsrc: String        
        srcname: String
        title: String
        description: String
        urls: String        
        urlf: String
        urlt: String
        button: String
    }

  type Query {
    contacts(
      id: ID
      firstName: String
      LastName:String
      phoneNumber:String
      email:String
      address:String 
    ): [Contact]
    contactById(id: ID): Contact
    getUsers: [User]
    getUser(name: String!): User!
  }

  type Mutation{
    toggleContact(id:ID): Contact
    addNewContact(contact: ContactInput): Contact
  }

  input ContactInput {
    id: ID
    firstName: String
    LastName:String
    phoneNumber:String
    email:String
    address:String 
  }

  type Contact {
    id: ID
    firstName: String
    LastName:String
    phoneNumber:String
    email:String
    address:String 
  }
`;
