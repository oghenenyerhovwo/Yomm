import React, {useState} from "react"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

import { AiOutlineDoubleRight } from "react-icons/ai"

import { Card, Button, Tab } from "../components"
import { homeArticles, activitiesTab, activitiesContent, homeFaq } from "../util"
import { amenPicture } from "/public/images"


export default function Home() {
  const [tab, setTab] = useState("tab2")
  return (
    <div className="container">
      <Head>
        <title>Yomm </title>
        <meta name='keywords' content="yomm"/>
      </Head>
      <div className={`${styles.home}`}>

      <div className={`${styles.home_intro} grid spacing-xl`}>
          <div className={`${styles.home_intro_text}`}>
            <h1 className="spacing-md">YOUNG MISSIONARY MOVEMENT</h1>
            <p className="spacing-sm">Young Missionary Movement(YOMM) is a movemnet under the pontifical mission society.</p>
            <div className={`${styles.home_intro_btn}`}>
              <Button variant="primary" href="/ninjas">Join the Mission</Button>
              <Button href="/ninjas">Learn More ABout Mission</Button>
            </div>
          </div>
          <div className={`image spacing-md ${styles.home_intro_img}`}><Image src={amenPicture} layout="fill" alt={amenPicture || "image"} /></div>
        </div>

        <div className={`${styles.home_mission_activities} spacing-xl`}>
          <h2 className="spacing-md">The Role of the Mission</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, dignissimos doloremque ducimus a eaque impedit aut rem facere earum magnam nobis delectus? Saepe iusto ad, dolorum architecto minus dolorem nemo!</p>


          <Tab.Container tab={tab}>
            {
              activitiesTab.length > 0 && activitiesTab.map(activity => (
                <React.Fragment key={activity._id}>
                  <Tab.Item eventKey={activity.eventKey} tab={tab} setTab={setTab} >{activity.label}</Tab.Item>
                </React.Fragment>
              ))
            }
          </Tab.Container>

          <div className={`${styles.home_mission_activities_items}`}>
            {
                activitiesContent.length > 0 && activitiesContent.map(activity => (
                    <div className={`spacing-md ${styles.home_mission_activities_item}`} key={activity._id}>
                        { 
                          activity.eventKey && activity.eventKey.includes(tab)  && (
                            <>
                              <div className={`image ${styles.home_mission_activities_item_image}`}>
                                  <Image src={activity.img} layout="fill" alt="testImg" />
                              </div>
                              <div className={`${styles.home_mission_activities_item_text}`}>
                                  <h2 className="spacing-md">{activity.title} </h2>
                                  <p className="spacing-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, dignissimos doloremque ducimus a eaque impedit aut rem facere earum magnam nobis delectus? Saepe iusto ad, dolorum architecto minus dolorem nemo!</p>
                                  <Button variant="primary" href={activity.btnLink}>{activity.btnText}</Button>
                              </div>
                            </>
                          )
                        } 
                    </div>
                ))
            }
          </div>
        </div>

        <div className={`${styles.home_articles} spacing-xl`}>
          <h2 className="spacing-md">Some of Our Latest Articles</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, dignissimos doloremque ducimus a eaque impedit aut rem facere earum magnam nobis delectus? Saepe iusto ad, dolorum architecto minus dolorem nemo!</p>

          <div className={`${styles.home_articles_cards}`}> 

            {
              homeArticles.length > 0 && homeArticles.map(article => (
                <React.Fragment key={article._id}>
                    <Card.Container className={`${styles[`home_articles_card${article._id}`]} `}>
                      <Card.Head>
                        <Card.Image src={article.img} alt="crossImg" />
                      </Card.Head>
                      <Card.Body>
                        <Card.Heading>{article.heading}</Card.Heading>
                        <Card.Paragraph>{article.paragraph} </Card.Paragraph>
                        <Button variant="primary" href={article.btnLink} block={true}><span>{article.btnText} </span> <AiOutlineDoubleRight /></Button>
                      </Card.Body>
                      
                  </Card.Container>
                </React.Fragment>
              ))
            }
          </div>

          


        </div>
        <div className={`${styles.home_faq} spacing-xl`}>
            <h2 className="spacing-md">Frequently Asked Questions</h2>
            <p className="spacing-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, dignissimos doloremque ducimus a eaque impedit aut rem facere earum magnam nobis delectus? Saepe iusto ad, dolorum architecto minus dolorem nemo!</p>

            <div className={`${styles.home_faq_cards}`}> 

              {homeFaq.length > 0 && homeFaq.map(faq => (
                <React.Fragment key={faq._id}>
                    <Card.ContainerFaq faq={faq} />
                </React.Fragment>
              ))}

            </div>


          </div>
      </div>
    </div>
  )
}
