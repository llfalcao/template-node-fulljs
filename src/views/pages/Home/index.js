import HomeSectionOne from "../../components/sections/HomeSectionOne";
import HomeSectionTwo from "../../components/sections/HomeSectionTwo";
import floatImage from "../../components/float/floatImage";

let Home = {
    is_private: false,

    render: async () => {
        let view = `
          <div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${floatImage}
          </div>
      `;

        return view;
    },

    after_render: async () => {},
};

export default Home;
