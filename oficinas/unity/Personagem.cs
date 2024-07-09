using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Personagem : MonoBehaviour
{
    private GameObject personagem;
    private Rigidbody2D rb;
    private Animator anim;
    private Controller controller;
    private float velocidade = 5.0f;
    private float forcaPulo = 5.0f;
    private bool noChao = true;


    void Start()
    {
        personagem = GameObject.Find("Personagem");
        rb = personagem.GetComponent<Rigidbody2D>();
        anim = personagem.GetComponent<Animator>();
        controller = GameObject.Find("Controller").GetComponent<Controller>();
    }

    void Update()
    {
        MovimentarPersonagem();
        Pular();
    }

    void MovimentarPersonagem() {
        float movimento = Input.GetAxis("Horizontal");

        rb.velocity = new Vector2(movimento * velocidade, rb.velocity.y);

        if(movimento > 0)
        {
            personagem.transform.eulerAngles = new Vector3(0, 0, 0);
            anim.SetBool("taAndando", true);
        }
        else if(movimento < 0)
        {
            personagem.transform.eulerAngles = new Vector3(0, 180, 0);
            anim.SetBool("taAndando", true);
        }
        else
        {
            anim.SetBool("taAndando", false);
        }
    }

    void Pular()
    {
        float pulo = Input.GetAxis("Jump");
        
        if(pulo > 0 && noChao)
        {
            rb.AddForce(new Vector2(0, forcaPulo), ForceMode2D.Impulse);
            noChao = false;
            anim.SetBool("taPulando", true);
        }
    }

    void OnCollisionEnter2D(Collision2D col)
    {
        if(col.gameObject.tag == "Chao" || col.gameObject.tag == "Plataforma")
        {
            noChao = true;
            anim.SetBool("taPulando", false);
        }

        if(col.gameObject.tag == "Inimigo" || col.gameObject.tag == "Espinho")
        {
            Destroy(personagem);
            controller.GameOver();
        }
    }

    void OnTriggerEnter2D(Collider2D col)
    {
        if(col.gameObject.tag == "Moeda")
        {
            Destroy(col.gameObject);
        }

        if(col.gameObject.tag == "Bandeira")
        {
            controller.Win();
        }
    }
}