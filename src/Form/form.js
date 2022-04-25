import React from 'react'
import style from './form.module.css'
import cn from 'classnames'
import { ReactComponent as Svg1 } from './prepose-menage.svg';
import { ReactComponent as Svg2 } from './logo_tiggidoo.svg';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';


export default function Form() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
  <>
    <div className={style.background}>
  <div className={cn(style.banner,style.tohide)}>
    <div className={style.centerbanner}>
      <Svg2 style={{float:"left"}} marginLeft={"100px"} width={"200px"}/>
      <p  className={style.top}>Services</p>
      <p  className={style.top}>Become a Todoo</p>
      <p className={style.login}>Log in</p>
      <p className={style.top}>Fr</p>
    </div>
  </div>

    <div className={style.container}>
      <h1 className={style.title}>Join the Todoo team today!</h1>
      <p  className={style.headline}>To join the Tiggidoo platform, please fill out this form. We will review
        your application and get back to you within 48 hours</p>
      <form>
        <div className={style.row}>
          <div className={cn(style.column,style.left)}>
            <label className={cn(style.labeldirection,style.name1)}>
              Name
              <TextField
                className={style.input}
                hiddenLabel
                placeholder='Name'
                variant="outlined"
                size="small"
              />
            </label>
            <label className={style.labeldirection}>
              Surname
              <TextField
                className={cn(style.input,style.name2)}
                hiddenLabel
                placeholder='Surame'
                variant="outlined"
                size="small"
              />
            </label>
            <label className={style.labeldirection}>
              Address
              <div>
                <div className={style.adress2parent}>
                  <TextField
                    className={cn(style.input,style.adress1,style.backpic)}
                    hiddenLabel
                    placeholder='Type an address an choose one'
                    variant="outlined"
                    size="small"
                    color="success"
                    InputProps={{
                      endAdornment: <InputAdornment position="end"><img alt='Loupe' src='magnifier.png' width={"15px"}/></InputAdornment>,
                    }}
                  />
                  <TextField
                    className={cn(style.input,style.adress2)}
                    hiddenLabel
                    placeholder='City'
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className={style.adress3parent}>
                  <TextField
                    className={cn(style.input,style.adress3)}
                    hiddenLabel
                    placeholder='Province'
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    className={cn(style.input,style.adress3)}
                    hiddenLabel
                    placeholder='Country'
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    className={cn(style.input,style.adress3)}
                    hiddenLabel
                    placeholder='Postal code'
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </label>
            <label className={style.labeldirection}>
              Cell phone number
              <TextField
                  className={cn(style.input,style.last)}
                  hiddenLabel
                  placeholder='Cell phone number'
                  variant="outlined"
                  size="small"
                />
            </label>
            <label className={style.labeldirection}>
              Email address
              <TextField
              
                  className={cn(style.input,style.last)}
                  hiddenLabel
                  placeholder='Email address'
                  variant="outlined"
                  size="small"
                />
            </label>
          </div>
          <div className={cn(style.column,style.right)}>
            <div className={style.labeldirection}>
              <label>Date of birth</label>
              <div>
              <Select
                style={{fontWeight:"normal",float:"left",width:"6rem",marginRight:"1rem"}}
                className={style.input}
                hiddenLabel
                size="small"
                defaultValue={"1980"}
              >
                <MenuItem value={"1980"}>1980</MenuItem>
              </Select>
              <Select
                style={{float:"left",width:"7rem",marginRight:"1rem"}}
                className={style.input}
                hiddenLabel
                size="small"
                defaultValue={"January"}
              >
                <MenuItem value={"January"}>January</MenuItem>
              </Select>
              <Select
              style={{float:"left",width:"3.5rem",marginRight:"1rem"}}
                className={style.input}
                hiddenLabel
                size="small"
                defaultValue={1}
              >
                <MenuItem value={1}>1</MenuItem>
              </Select>
              </div>
            </div>
            <div className={style.labeldirection}>
              <label>What languages do you speak ?</label>
              <FormGroup  row>
                <Checkbox style={{marginLeft:"-9px"}}/> <p>French</p>
                <Checkbox style={{marginLeft:"20px"}}/> <p>English</p>
              </FormGroup>
            </div>
            <label  className={style.labeldirection}>Are you over 18 years old and legally authorized to work in Canada ?</label>
            <div style={{display:"flex",flexDirection:"row"}}>
              <div>
                <div className={style.labeldirection}>
                    <RadioGroup  row>
                      <Radio checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            style={{marginLeft:"-9px"}}/>
                            
                            <p>Yes</p>
                      <Radio checked={selectedValue === 'b'}
                            onChange={handleChange}
                            value="b"
                            /> <p>No</p> 
                    </RadioGroup>
                </div>
                <div style={{width:"100%"}} className={style.labeldirection}>
                  <label style={{marginTop:"1rem"}}>Do you have a criminal history ?</label>
                  <label style={{margin:"0",fontSize:"0.7rem",fontWeight:"normal"}}>(A background check will be performed)</label>
                  <RadioGroup row>
                      <Radio checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            style={{marginLeft:"-9px"}}/>
                            
                            <p>Yes</p>
                      <Radio checked={selectedValue === 'b'}
                            onChange={handleChange}
                            value="b"
                            /> <p>No</p> 
                  </RadioGroup>
                </div>
              </div>
              <Svg1 alt className={style.hide} style={{marginLeft:"15%",marginTop:"5%",width:"250px"}}   />
            </div>
            <Button className={style.button}><p className={style.center}>NEXT</p></Button>
          </div>
        </div>
      
      </form>
    </div>
  </div>
  </>
  )
}