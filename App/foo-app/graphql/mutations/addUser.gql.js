import gql from 'graphql-tag';

const ADD_USER = gql`
    mutation addUser($name: String!, $password: String!) {
        addUser(name: $name, password: $password) {
            name
        }
    }
`

export default ADD_USER;
