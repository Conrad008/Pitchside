import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Button } from '@base-ui/react';
import { LogOut, ShoppingCart, Sun, Moon, User, ShieldAlert } from 'lucide-react'

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  
  const cartItemCount = cart?.length || 0;

  return (
    
  )