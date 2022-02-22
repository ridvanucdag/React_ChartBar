import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage7 extends React.Component {
  state = {
    dataDoughnut: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <MDBContainer>
        <h5 className="mt-5">Doughnut chart Ürünlerimiz Deneme vb.</h5>
        <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage7;


//Rıdvan Üçdağ
//github.com/ridvanucdag
//linkedin.com/ridvanucdag