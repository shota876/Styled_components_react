import React from 'react'
import styled from 'styled-components';
import {
    Card,
    CardContent,
    CardTitle,
    Description,
    Button,
  } from "../styles/styled.Card";
  import TextBanner from "../textbanner/TextBanner";

  const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `


function Infoboxes() {
  return (
    <>
        <TextBanner title={'What We Provide'} subtitle={'Our Services'}/>
        <Container>
            <Card>
                <CardContent>
                    <CardTitle>Training Courses</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, temporibus recusandae.
                        Culpa reprehenderit quo, sit qui earum eius dolores
                        inventore quaerat alias quam, architecto sequi repellat 
                        repellendus doloremque ipsam. Nesciunt.
                    </Description>
                    <Button>Read More...</Button>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <CardTitle>Service Desk</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, temporibus recusandae.
                        Culpa reprehenderit quo, sit qui earum eius dolores
                        inventore quaerat alias quam, architecto sequi repellat 
                        repellendus doloremque ipsam. Nesciunt.
                    </Description>
                    <Button>Read More...</Button>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <CardTitle>Data Recovery</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, temporibus recusandae.
                        Culpa reprehenderit quo, sit qui earum eius dolores
                        inventore quaerat alias quam, architecto sequi repellat 
                        repellendus doloremque ipsam. Nesciunt.
                    </Description>
                    <Button>Read More...</Button>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <CardTitle>Proactive Services</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, temporibus recusandae.
                        Culpa reprehenderit quo, sit qui earum eius dolores
                        inventore quaerat alias quam, architecto sequi repellat 
                        repellendus doloremque ipsam. Nesciunt.
                    </Description>
                    <Button>Read More...</Button>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <CardTitle>User Support</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, temporibus recusandae.
                        Culpa reprehenderit quo, sit qui earum eius dolores
                        inventore quaerat alias quam, architecto sequi repellat 
                        repellendus doloremque ipsam. Nesciunt.
                    </Description>
                    <Button>Read More...</Button>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <CardTitle>24/7 Services</CardTitle>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, temporibus recusandae.
                        Culpa reprehenderit quo, sit qui earum eius dolores
                        inventore quaerat alias quam, architecto sequi repellat 
                        repellendus doloremque ipsam. Nesciunt.
                    </Description>
                    <Button>Read More...</Button>
                </CardContent>
            </Card>
        </Container>
    </>
  )
}

export default Infoboxes