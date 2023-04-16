import React, { Component } from "react";
import classes from "./ProductImageGallery.module.scss";

class ProductImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: this.props.images,
      selectedImage: null,
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.setState({ selectedImage: this.state.imageList[0] });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.images !== this.props.images) {
      this.setState({
        imageList: this.props.images,
        selectedImage: this.props.images[0],
        currentIndex: 0,
      });
    }
  }

  handlePrev = () => {
    const { currentIndex, imageList } = this.state;
    const newIndex =
      currentIndex === 0 ? imageList.length - 1 : currentIndex - 1;
    this.setState({
      currentIndex: newIndex,
      selectedImage: imageList[newIndex],
    });
  };

  handleNext = () => {
    const { currentIndex, imageList } = this.state;
    const newIndex =
      currentIndex === imageList.length - 1 ? 0 : currentIndex + 1;
    this.setState({
      currentIndex: newIndex,
      selectedImage: imageList[newIndex],
    });
  };

  handleSelect = (event) => {
    const selectedImage = event.target.src;
    this.setState({ selectedImage });
  };

  render() {
    const { imageList, selectedImage } = this.state;

    return (
      <div className={classes.container}>
        <div>
          <div>
            <img
              src={selectedImage}
              className={classes["main-img"]}
              alt="main image"
            />
          </div>

          <div className={classes["img-slider"]}>
            <img
              src="images/Path 347.png"
              alt="arrow left"
              onClick={this.handlePrev}
            />
            {imageList.map((image, index) => (
              <img
                key={index}
                src={image}
                onClick={this.handleSelect}
                className={classes["selected-img"]}
              />
            ))}

            <img
              src="images/Path 346.png"
              alt="arrow right"
              onClick={this.handleNext}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductImageGallery;
