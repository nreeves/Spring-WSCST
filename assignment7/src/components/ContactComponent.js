class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      console.log('Current State is: ' + JSON.stringify(this.state));
      alert('Current State is: ' + JSON.stringify(this.state));
      event.preventDefault();
    }
  
    render() {
      // Render method was empty in your code
      // You would typically return JSX here
      return (
        // Your form JSX would go here
      );
    }
  }