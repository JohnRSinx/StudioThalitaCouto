import React from 'react';
import {useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import "./styles.css";

export function FormDialog({content ,setListClient , open , onClose}) {
  const [editeValues, setEditeValues] = useState({
    id:content.iddadosclient,
    name:content.name,
    category:content.category,
    value:content.value,
  })
  

  function handleSalveEdit () {
    axios.put("http://localhost:3001/edit" , {
      id:editeValues.id,
      name:editeValues.name,
      category:editeValues.category,
      value:editeValues.value,
    })
    onClose();
 }
  
async function handleDeleteCard (){
  try {
   await axios.delete(`http://localhost:3001/delete/${editeValues.id}`);
   await axios.get("http://localhost:3001/getCards").then((response)=> {
      setListClient(response.data);
      })
  } catch(err){
    console.log(err);
  }
    onClose()
 }
 
  const handleChangeValues = value => {
    setEditeValues(prevValues=>({
      ...prevValues,
      [value.target.id]:value.target.value,
    }));
  }


  return (
            <Dialog 
              open={open} 
              onClose={onClose} 
              aria-labelledby="form-dialog-title"
              classes={{paper:"dialog-root"}}
            >
            
            <DialogTitle 
              id="form-dialog-title"
              classes={{root:"title"}}
            >
            Editar
            </DialogTitle>
            <DialogContent >
            <TextField
              classes={{root:"input"}}
              autoFocus
              margin="dense"
              id="name"
              label="Nome da cliente..."
              type="text"
              fullWidth
              defaultValue={content.name}
              onChange={handleChangeValues}
            />
            <TextField
              classes={{root:"input"}}
              margin="dense"
              id="category"
              label="Procedimento..."
              type="text"
              fullWidth
              defaultValue={content.category}
              onChange={handleChangeValues}
            />
            <TextField
              classes={{root:"input"}}
              margin="dense"
              id="value"
              label="Valor..."
              type="text"
              fullWidth
              defaultValue={content.value}
              onChange={handleChangeValues}
            />
          </DialogContent>
          <DialogActions
          classes={{root:"actions"}}
          >
            <Button 
            onClick={onClose}
            classes={{root:"button"}}
            >
              Fechar
            </Button>
            <Button 
            onClick={handleDeleteCard}
            classes={{root:"button"}}
            >
              Excluir
            </Button>
            <Button 
            onClick={handleSalveEdit} 
            classes={{root:"button"}}
            >
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      
  );
}