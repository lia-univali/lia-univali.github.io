export default (req, res) => {
    let projetos = [
        {
            "projeto": "e-c.a.s.s.i.e.",
            "desc":"Análise e mapeamento de regiões costeiras.",
            "texto":"",
            "logo": "static/img/projetos/ecassie.svg",
            "btnlink": "https://pt.wikipedia.org/wiki/Cassie_(cantora)",
            "cor": "#077B5C"
        },
        {
            "projeto": "Esqueleto",
            "desc":"Estrutura robótica para auxiliar humanos em tarefas.",
            "texto":"Estruturas robóticas sobrepostas ao corpo, visam ajudar na realização de tarefas a partir da mimetização de movimentos, tais estruturas são conhecidas como exoesqueletos robóticos, os quais possuem aplicabilidade em diversas áreas. O uso de tal tecnologia vem para trazer capacidades físicas as quais o usuário não possui, podendo entregar ao usuário força sobre humana, altos níveis de resistência ou então recuperar capacidades perdidas. No entanto, métodos de controle de tais exoesqueletos ainda são aplicações especificas, não encontrando um consenso dentro da literatura e trabalhar com sinais biológicos contém uma série de interferências necessitando assim de cuidados para a correta interpretação dos sinais e desta forma a correta ativação dos atuadores de forma a mimetizar os movimentos de seu usuário. Esse trabalho visa desenvolver um método e eficiente de controlar um braço de exoesqueleto com dois graus de liberdade. Para o desenvolvimento de um sistema de controle, com o foco no controle do membro superior do exoesqueleto, o mapeamento da musculatura envolvida na movimentação do braço, o uso de sensores e a captação dos sinais elétricos são necessários, estes sinais são gerados a partir da contração muscular. Para o acionamento correto dos motores, a fim de mimetizar os movimentos efetuados pelo usuário, é necessária a correlação correta dos sinais, dessa forma pretende-se produzir um sistema de controle que é apto para o controle de um braço de exoesqueleto.",
            "logo": "static/img/projetos/exo.svg",
            "btnlink": "https://pt.wikipedia.org/wiki/Cassie_(cantora)",
            "cor": "#9054BD"
        },
        {
            "projeto": "Microalgas",
            "desc":"Colaboração com o curso de oceanografia da UNIVALI.",
            "texto":"A multiplicação de microalgas nocivas em regiões de pesca de moluscos bivalves é um problema que tem repercussão tanto para os pescadores e suas famílias quanto para a economia da região afetada já que elas produzem toxinas que afetam os seres humanos, causando problemas gastrointestinais até, em casos mais extremos, chegar a causar câncer e levar a morte do consumidor. Atualmente, em Santa Catarina, é feita a análise da água para identificar a presença de toxinas pela Companhia Integrada de Desenvolvimento Agrícola de Santa Catarina (CIDASC). A resposta dada pela análise da CIDASC é feita de maneira que os maricultores não tenham um tempo hábil para a tomada de decisões, como manter os mariscos já cultivados ou vendê-los. O trabalho cria um projeto para a adaptação dos meios de coleta de amostra para que este processo consiga ser realizado pelo próprio maricultor. Dessa forma, a quantidade de amostras obtidas e as regiões abrangidas aumentam consideravelmente. No mecanismo utilizado para a coleta são embarcados sensores para validar a coleta e adquirir informações que o maricultor teria dificuldade de obter por conta própria. Também é desenvolvido o projeto de um aplicativo para a documentação das informações adquiridas pela coleta, com tutoriais para guiar o processo de coleta. O trabalho atual é parte de um conjunto maior que engloba a coleta das amostras e identificação da presença de microalgas na água a partir do uso de inteligência artificial. No escopo do trabalho, ficam apenas a parte de coleta e documentação das microalgas. É feito um estudo e apresentado o processo atual de coleta, assim como a importância da maricultura para a economia de diversas regiões do país, ocorre um detalhamento do uso de tecnologias subaquáticas, com foco na internet das coisas subaquáticas e, por fim, é detalhado o funcionamento, tanto do coletor quanto do aplicativo, por meio de diagrama de blocos, fluxogramas e diagrama de sequência. O projeto é feito em colaboração com o curso de oceanografia da UNIVALI, sendo esses os idealizadores do projeto completo.",
            "logo": "static/img/projetos/algas.svg",
            "btnlink": "https://pt.wikipedia.org/wiki/Cassie_(cantora)",
            "cor": "#11998e"
        }
    
        // {
        //     "projeto": "Turing",
        //     "desc":"Maquina de Turing Analógica para fins educacionais.",
        //     "texto":"O trabalho descreve uma proposta de desenvolvimento de um dispositivo prático para a área de Teoria da Computação. No projeto irá desenvolver uma Máquina de Turing. Neste dispositivo os arquivos com as definições de linguagens serão interpretados pela máquina de Turing analógica. O estudo contempla tanto o hardware quanto o software para interpretar as linguagens. Considerando sensores e motores, pretende-se ler uma fita de entrada e realizar todos os devidos movimentos tanto de escrita na fita quanto de leitura, movimentando-se para aceitar ou recusar a palavra de entrada.",
        //     "logo": "projetob.svg",
        //     "btnlink": "https://pt.wikipedia.org/wiki/Cassie_(cantora)",
        //     "cor": "#EF9208"
        // },
    ]
    res.json(projetos)
  }
  