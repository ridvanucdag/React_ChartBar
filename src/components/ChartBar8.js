import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

class ChartsPage8 extends React.Component {
  state = {
    dataBubble: {
      labels: 'Bubble',
      datasets: [
        {
          label: 'John',
          data: [
            {
              x: 3,
              y: 7,
              r: 10
            }
          ],
          backgroundColor: '#ff6384',
          hoverBackgroundColor: '#ff6384'
        },
        {
          label: 'Peter',
          data: [
            {
              x: 3.2,
              y: 7,
              r: 10
            }
          ],
          backgroundColor: '#44e4ee',
          hoverBackgroundColor: '#44e4ee'
        },
        {
          label: 'Donald',
          data: [
            {
              x: 3.4,
              y: 7,
              r: 10
            }
          ],
          backgroundColor: '#62088A',
          hoverBackgroundColor: '#62088A'
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <h5 className='mt-5'>Bar chart Ürünlerimiz Deneme vb.</h5>
        <Bubble data={this.state.dataBubble} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage8;


//Rıdvan Üçdağ
//github.com/ridvanucdag
//linkedin.com/ridvanucdag