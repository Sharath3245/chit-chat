import { useState } from "react";
import loginStyles from "./LoginStyles";
import { Box } from "@mui/material";
import {
  FormControl,
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { motion } from "framer-motion";

function Login() {
  const classnames = loginStyles();
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [signInValues, setSignInValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    profilePic: "",
    showPassword: false,
    showConfirmPassword: false,
  });
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Login",
    },
    {
      id: 2,
      name: "SignIn",
    },
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const handleTabs = (id) => {
    setActiveTab(id);
  };
  const handleValues = (type, event) => {
    if (type === "login") {
      setLoginValues((prevstate) => ({
        ...prevstate,
        [event.target.name]: event.target.value,
      }));
    } else {
      setSignInValues((prevstate) => ({
        ...prevstate,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handlePassword = (type) => {
    console.log(type);
    switch (type) {
      case "login":
        setLoginValues((prev) => ({
          ...prev,
          showPassword: !prev.showPassword,
        }));
        break;
      case "signInPassword":
        setSignInValues((prev) => ({
          ...prev,
          showPassword: !prev.showPassword,
        }));
        break;
      case "signInConfirmPassword":
        setSignInValues((prev) => ({
          ...prev,
          showConfirmPassword: !prev.showConfirmPassword,
        }));
        break;
      default:
        return;
    }
  };
  const loginForm = () => {
    return (
      <form className={classnames.forms}>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Email *</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Email"
            placeholder="Enter your email"
            name="email"
            value={loginValues.email}
            onChange={(e) => {
              handleValues("login", e);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Password *</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Password"
            placeholder="Enter your password"
            type={loginValues.showPassword ? "text" : "password"}
            name="password"
            value={loginValues.password}
            onChange={(e) => {
              handleValues("login", e);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => handlePassword("login")}
                >
                  {!loginValues.showPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    );
  };

  const signInForm = () => {
    return (
      <form className={classnames.forms}>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Name *</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Email"
            placeholder="Enter your name"
            name="name"
            value={signInValues.name}
            onChange={(e) => {
              handleValues("signin", e);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Email *</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Email"
            placeholder="Enter your email"
            name="email"
            onChange={(e) => {
              handleValues("signin", e);
            }}
            value={signInValues.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Password *</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Password"
            placeholder="Enter your password"
            type={signInValues.showPassword ? "text" : "password"}
            name="password"
            onClick={() => handlePassword("signInPassword")}
            value={signInValues.password}
            onChange={(e) => {
              handleValues("signin", e);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  {!signInValues.showPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">
            Confirm Password *
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Confirm Password"
            placeholder="Confirm your password"
            type={signInValues.showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={signInValues.confirmPassword}
            onChange={(e) => {
              handleValues("signin", e);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => handlePassword("signInConfirmPassword")}
                >
                  {!signInValues.showConfirmPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    );
  };
  return (
    <div className={classnames.container}>
      <Box>
        <motion.div
          key={activeTab}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 3 }}
          className={classnames.box}
        >
          <div className={classnames.tabContainer}>
            {tabs.map((tab, index) => {
              return (
                <Button
                  className={
                    activeTab === tab.id ? classnames.tabActive : classnames.tab
                  }
                  onClick={() => {
                    handleTabs(tab.id);
                  }}
                >
                  {tab.name}
                </Button>
              );
            })}
          </div>

          {activeTab === 1 && loginForm()}
          {activeTab === 2 && signInForm()}

          <button className={classnames.continueButton}>Continue</button>
        </motion.div>
      </Box>
    </div>
  );
}

export default Login;
