using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class Controller : MonoBehaviour
{
    [SerializeField] private Canvas canvas;
    [SerializeField] private GameObject cenario;

    void Update()
    {
        MoverCenario();
    }

    public void GameOver()
    {
        canvas.gameObject.SetActive(true);
        Time.timeScale = 0;

    }

    public void Win()
    {
        canvas.gameObject.SetActive(true);
        Time.timeScale = 0;
        Text texto = canvas.GetComponentInChildren<Text>();
        texto.text = "Você venceu!!";
    }

    public void Restart()
    {
        Time.timeScale = 1;
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }

    public void MoverCenario() 
    {
        if (cenario.transform.position.x <= -13)
        {
            return;
        }
        cenario.transform.position = new Vector3(cenario.transform.position.x - 0.005f, cenario.transform.position.y, cenario.transform.position.z);
    }
}
