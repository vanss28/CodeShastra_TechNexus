import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext"; // Import AuthContext from where it's defined
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import qs from "qs";
import { useNavigate } from 'react-router-dom';

const MadeWithLove = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Made by "}
    <Link color="inherit" href="https://material-ui.com/">
      Tech Nexus
    </Link>
    {" team."}
  </Typography>
);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const { updateAuthTokens } = useContext(AuthContext); // Access updateAuthTokens from AuthContext
  const navigate = useNavigate();
  
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false
  });

  // Handler for form input change
  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      // Update authentication tokens using context
      updateAuthTokens(response.data.access, response.data.refresh);
      console.log("Authentication tokens updated successfully!");
      console.log("Access Token: " + response.data.access);
      if (response.status === 200) {
        console.log('Yayyyy');
        localStorage.setItem('accessToken', response.data.access);
        navigate('/');
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  let data = qs.stringify(formData);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:8000/auth/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formData.username}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox name="rememberMe" color="primary" />}
              label="Remember me"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <MadeWithLove />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
