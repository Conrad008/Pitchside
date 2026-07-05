import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '@/context/CartContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { CreditCard, Wallet, Truck } from 'lucide-react'; // Added icons for visual polish

