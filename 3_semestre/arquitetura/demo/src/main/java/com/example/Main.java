package com.example;

import com.example.model.ContaCorrente;
import com.example.model.ContaPoupanca;

public class Main {
    public static void main(String[] args) {
        ContaCorrente c1 = new ContaCorrente();
        ContaPoupanca c2 = new ContaPoupanca();
        System.out.println(c1.toString());
        System.out.println(c2.toString());
    }
}
