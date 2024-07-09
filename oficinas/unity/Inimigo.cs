using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Inimigo : MonoBehaviour
{
    private GameObject inimigo;
    private Rigidbody2D rb;
    private float direcao = -1;
    private float velocidade = 3.0f;

    void Start()
    {
        inimigo = GameObject.Find("Inimigo");
        rb = inimigo.GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        MovimentarInimigo();   
    }

    void MovimentarInimigo()
    {
        rb.velocity = new Vector2(direcao * velocidade, rb.velocity.y);
        if(direcao > 0)
        {
            inimigo.transform.eulerAngles = new Vector3(0, 180, 0);
        }
        else
        {
            inimigo.transform.eulerAngles = new Vector3(0, 0, 0);
        }
    }

    void OnCollisionEnter2D(Collision2D col)
    {
        if(col.gameObject.tag == "Plataforma") {
            direcao *= -1;
        }
    }
}
