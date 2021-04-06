import React from 'react';
import { OptForm, Feature } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/Jumbotron';

export default function Home(){
    return (
            <>
                <HeaderContainer>
                    <Feature>
                        <Feature.Title>Unlimited Films, TV, Programms and more</Feature.Title>
                        <Feature.SubTitle>Watch anywere. Cancel at any time</Feature.SubTitle>
                        <OptForm>
                            <OptForm.Input placeholder='email address' />
                            <OptForm.Button>Try it Now</OptForm.Button>
                            <OptForm.Break />
                            <OptForm.Text>Ready to Watch? Enter your Email to Register or Restart your membership</OptForm.Text>
                        </OptForm>
                    </Feature>
                </HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
                
            </>
    )
};