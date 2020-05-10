import React from 'react';

import ContactGridView from './ContactGridView';
import ContactListView from './ContactListView';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ContcatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGrid: false
    }
  }

  toggleView(e) {
    const changeView = !this.state.isGrid;
    this.setState({
      isGrid: changeView
    });
  }
  
  render() {
    return (
      <div>
        <Container>
          <Row>
            <br />
          </Row>

          <Row>
            <Col></Col>

            <Col>
              <h3>Contact List</h3>
              <hr />
            </Col>

            <Col>
              <Button variant="outline-secondary" size="lg" onClick={this.toggleView.bind(this)}>
                {
                  this.state.isGrid ? 'List View' : 'Grid View'
                }
              </Button>
            </Col>
          </Row>

          {
            this.state.isGrid ? <ContactGridView /> : <ContactListView />
          }

          <Row>
            <Col>
              Bhavna
            </Col>

            <Col>
              Jain
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}