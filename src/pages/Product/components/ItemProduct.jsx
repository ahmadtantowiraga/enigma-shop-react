import { IconHeart } from "@tabler/icons-react";
import { Component } from "react";
import PropTypes from "prop-types";
import { IconShoppingCart } from "@tabler/icons-react";
import { IconHeartFilled } from "@tabler/icons-react";

class ItemProduct extends Component {
  // constructor(props){
  //     super(props);
  // }
  state = {
    count: 0,
    isSaved: false,
  };
  handleSave = () => {
   this.setState({ isSaved: !this.state.isSaved }, ()=>{
    if (this.state.isSaved){
        this.props.changeSavedCount(1);
    } else {
        this.props.changeSavedCount(-1);
    }})
  
  };


  handleDecrement = () => {
    if (this.state.count === 0) return;
    this.setState({
      count: this.state.count - 1,
    }, ()=>{
        this.props.changeItemCount(-1);
    });
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    }, ()=>{
        this.props.changeItemCount(1);
    });
  };



  render() {
    const { image, name, harga } = this.props;
    return (
      <>
        <div className="card shadow-sm h-100">
          <img
            src={image}
            alt="product-image"
            className="card-img-top h-50 object-fit-contain"
          />
          <div className="card-body">
            <h5 className="card-title fw-light">{name}</h5>
            <p className="fw-bold">Rp. {harga}</p>
          </div>

          <div className="d-flex justify-content-between p-2">
            <div>
              {this.state.count >= 1 ? (
                <div className="d-flex align-items-center justify-content-start column-gap-4">
                  <button
                    onClick={this.handleDecrement}
                    className="btn btn-primary"
                  >
                    -
                  </button>
                  <span>{this.state.count}</span>
                  <button
                    onClick={this.handleIncrement}
                    className="btn btn-primary"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={this.handleIncrement}
                  className="d-flex align-items-center gap-2 btn btn-primary"
                >
                  <IconShoppingCart /> Tambah Keranjang
                </button>
              )}
            </div>

            <button onClick={this.handleSave} className="btn btn-link">
              {this.state.isSaved ? (
                <i>
                  <IconHeartFilled />
                </i>
              ) : (
                <i>
                  <IconHeart />
                </i>
              )}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ItemProduct;
ItemProduct.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  harga: PropTypes.number,
  changeSavedCount: PropTypes.func,
  changeItemCount: PropTypes.func,
};
