import React from "react";
import Proj1_1 from "../p4.png";
import { motion } from "framer-motion";

function P4() {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="card">
      <div className="card-image">
        <img src={Proj1_1} alt="p1" />
      </div>
      <div className="card-content">
        <p id="projTitle" className="title is-size-2">
          Todo APP
        </p>
        <p id="projDesc" className="subtitle is-size-5">
          A todo app that performs CRUD using REST API.
        </p>
        <p id="toolsused" className="is-size-6">
          Vue.js Node.js Express.js MongoDb
        </p>
      </div>
      <div className="links has-text-right mb-4 mt-4">
        <a href="https://github.com/darwin808/todo-vue-express-mongo">
          <i className="fab fa-github  fa-lg" id="profile-links"></i>
        </a>

        <a id="iconlinks" href="https://todoo1-1.herokuapp.com/">
          <i
            className="fas fa-external-link-alt fa-lg mr-4 ml-4"
            id="profile-links"></i>
        </a>
      </div>
    </motion.div>
  );
}

export default P4;
