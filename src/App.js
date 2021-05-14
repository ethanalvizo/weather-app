import './App.css';
import Dashboard from './components/Dashboard';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/"
  })

  return (
    <ApolloProvider client={ client } >
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
