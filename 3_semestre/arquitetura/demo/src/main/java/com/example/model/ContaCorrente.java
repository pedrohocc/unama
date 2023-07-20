package com.example.model;

import com.example.Interface.InterfaceContaBancaria;

public class ContaCorrente implements InterfaceContaBancaria {

    @Override
    public double deposito() {
        return 0.0;
    }

    @Override
    public double saque() {
        return 0.0;
    }

    @Override
    public double trasnf() {
        return 0.0;
    }

    @Override
    public String toString() {
        return "ContaCorrente []";
    }
    
}
