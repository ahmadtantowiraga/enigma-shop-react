import { Component } from "react";
import { IconBookmarks, IconShoppingCart } from "@tabler/icons-react";
import ItemProduct from "./ItemProduct";

export default class ListProduct extends Component {
  state = {
    itemCount: 0,
    savedCount: 0,
  };

  handleChangeSavedCount = (number) => {
    this.setState({
      savedCount: this.state.savedCount + number,
    });
  };

  handleChangeItemCount = (number)=>{
    this.setState({
        itemCount: this.state.itemCount + number,
    })
  }
  render() {
    return (
      <section>
        <div className="container shadow-sm p-4 my-4 rounded-2">
          <div className="d-flex justify-content-between">
            <h2 className="my-2">List Product Enigma Shop</h2>
            <div className="d-flex justify-content-end column-gap-2">
              <p className="text-end my-2">
                <IconBookmarks />
                <span className="badge text-bg-secondary rounded-pill">
                  {this.state.savedCount}
                </span>
              </p>
              <p className="text-end my-2">
                <IconShoppingCart />
                <span className="badge text-bg-primary rounded-pill">
                  {this.state.itemCount}
                </span>
              </p>
            </div>
          </div>
          <div className="row row-cols-lg-4 row-cols-1 g-4">
            <div className="col">
              <ItemProduct
                image="https://wingscorp.com/wp-content/uploads/2021/11/IMG-20211201-WA0003.jpg"
                name="ale ale"
                harga={2000}
                changeSavedCount={this.handleChangeSavedCount}
                changeItemCount={this.handleChangeItemCount}
              />
            </div>
            <div className="col">
              <ItemProduct
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29UydczsVQoWnJ0NjRbdBFykotRcCX4f9OFuzyUOLug&s"
                name="oreo"
                harga={4000}
                changeSavedCount={this.handleChangeSavedCount}
                changeItemCount={this.handleChangeItemCount}
              />
            </div>
            <div className="col">
              <ItemProduct
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtYNK0wH3BaxlxFfz7SZdJ0sArpUcT4HMGxJLBswQdg&s"
                name="Orson"
                harga={2300}
                changeSavedCount={this.handleChangeSavedCount}
                changeItemCount={this.handleChangeItemCount}
              />
            </div>
            <div className="col">
              <ItemProduct
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTiTW18-DiOw8WZBzvQhZWvo-QbCa8aFAG-1IlODFTw&s"
                name="Komo"
                harga={3400}
                changeSavedCount={this.handleChangeSavedCount}
                changeItemCount={this.handleChangeItemCount}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
