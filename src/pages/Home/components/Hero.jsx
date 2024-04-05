import { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <>
        <div className="container text-left mt-5 pt-5 mb-5">
          <div className="row mt-5">
            <div className="col">
              <h1>
                Selamat Datang di Enigma Shop <b>Pusat Kebutuhan Harian Anda</b>
              </h1>
              <h2>Temukan Segala Kebutuhan Makanan dan Kelontong di Sini!</h2>
              <p>
                DI Enigma Shop, kami berkomitmen untuk menyediakan produk-produk
                berkualitas tinggi yang memenuhi semua kebutuhan sehari-hari
                Anda, mulai dari makanan segar, bahan pokok, smapai keperluan
                rumah tangga. Dengan harga yang terjangkau, belanja jadi lebih
                mudah dan myenangkan!
              </p>
              <div className="btn-belanja">
                <button
                  type="button"
                  className="btn btn-primary "
                >
                    <span className="belanja">Belanja Sekarang</span>
                  
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success ms-4"
                >
                    <span className="belanja">Kontak Kami</span>
                  
                </button>
              </div>
            </div>
            <div className="col">
              <img src="../../../public/tas.jpg" height="350px" alt="image" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
