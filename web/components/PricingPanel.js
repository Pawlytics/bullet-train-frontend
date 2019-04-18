import React from "react";

const TheComponent = class extends React.Component {
    displayName: 'TheComponent'

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }


    render() {
        const {hasFeature, redirect} = this.props;
        const explain = hasFeature("explain");

        return (
            <div className="pricing">
                <div className="container">
                    <h2 className="text-center margin-bottom margin-top">Start using Bullet Train for free</h2>
                    <p className="text-center">Then increase your plan as your business grows.</p>
                    <div className="col-md-12">
                        <div className={"flex-row row-center"}>
                            {!hasFeature('free_tier') ? (
                                <div className={"col-md-3 pricing-panel"}>
                                    <div className="panel panel-default">
                                        <div className="panel-content">
                                            <p className="featured"> </p>
                                            <p className="pricing-price">Side Project</p>
                                            <img src="/images/growth.svg" alt="free icon" className="pricing-icon"/>
                                            <p className="pricing-type">$5</p>
                                            <p className="text-small text-center">Billed monthly</p>
                                            <Link to={`/${redirect}#sign-up`} className="pricing-cta blue" onClick={Utils.scrollToSignUp}>Start free trial</Link>
                                        </div>
                                        <div className="panel-footer">
                                            <p className="text-small text-center link-style">What's included</p>
                                            <ul className="pricing-features">
                                                <li><p>Up to <strong>20,000</strong> requests per month</p></li>
                                                <li><p>Unlimited Administrator Accounts</p></li>
                                                <li><p>Unlimited Projects</p></li>
                                                <li><p>Unlimited Environments</p></li>
                                                <li><p>Unlimited Feature Flags</p></li>
                                                <li><p>Email Technical Support</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={"col-md-3 pricing-panel"}>
                                    <div className="panel panel-default">
                                        <div className="panel-content">
                                            <p className="featured"> </p>
                                            <p className="pricing-price">Free</p>
                                            <img src="/images/growth.svg" alt="free icon" className="pricing-icon"/>
                                            <p className="pricing-type">Free</p>
                                            <p className="text-small text-center">more flags than the UN</p>
                                            <Link to={`/${redirect}#sign-up`} className="pricing-cta blue" onClick={Utils.scrollToSignUp}>Sign up</Link>
                                        </div>
                                        <div className="panel-footer">
                                            <p className="text-small text-center link-style">What's included</p>
                                            <ul className="pricing-features">
                                                <li><p>Up to <strong>20,000</strong> requests per month</p></li>
                                                <li><p>Unlimited Administrator Accounts</p></li>
                                                <li><p>Unlimited Projects</p></li>
                                                <li><p>Unlimited Environments</p></li>
                                                <li><p>Unlimited Feature Flags</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className={"col-md-3 pricing-panel"}>
                                <div className="panel panel-default">
                                    <div className="panel-content">
                                        <p className="featured"> </p>
                                        <p className="pricing-price">Start-Up</p>
                                        <img src="/images/startup.svg" alt="Startup icon" className="pricing-icon"/>
                                        <p className="pricing-type">$29</p>
                                        <p className="text-small text-center">billed monthly</p>
                                        <Link to={`/${redirect}#sign-up`} className="pricing-cta blue" onClick={Utils.scrollToSignUp}>Sign up</Link>
                                    </div>
                                    <div className="panel-footer">
                                        <p className="text-small text-center link-style">What's included</p>
                                        <ul className="pricing-features">
                                            <li><p>Up to <strong>250,000</strong> requests per month</p></li>
                                            <li><p>Unlimited Administrator Accounts</p></li>
                                            <li><p>Unlimited Projects</p></li>
                                            <li><p>Unlimited Environments</p></li>
                                            <li><p>Unlimited Feature Flags</p></li>
                                            <li><p>Email Technical Support</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-3 pricing-panel"}>
                                <div className="panel panel-default">
                                    <div className="panel-content">
                                        <p className="featured">Most Popular</p>
                                        <p className="pricing-price">Scale-Up</p>
                                        <img src="/images/layers2.svg" alt="Scale-up icon" className="pricing-icon"/>
                                        <p className="pricing-type">$99</p>
                                        <p className="text-small text-center">billed monthly</p>
                                        <Link to={`/${redirect}#sign-up`} className="pricing-cta blue" onClick={Utils.scrollToSignUp}>Sign up</Link>
                                    </div>
                                    <div className="panel-footer">
                                        <p className="text-small text-center link-style">What's included</p>
                                        <ul className="pricing-features">
                                            <li><p>Up to <strong>2 million</strong> requests per month</p></li>
                                            <li><p>All Startup Features</p></li>
                                            <li><p>Private Discord Technical Support</p></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-3 pricing-panel"}>
                                <div className="panel panel-default">
                                    <div className="panel-content">
                                        <p className="featured"> </p>
                                        <p className="pricing-price">Enterprise</p>
                                        <img src="/images/cubes.svg" alt="Enterprise icon" className="pricing-icon"/>
                                        <p className="pricing-type">Contact Us</p>
                                        <p className="text-small text-center">for enterprise pricing</p>
                                        <a href="mailto:enterprise@bullet-train.io" className="pricing-cta blue">Contact Us</a>
                                    </div>

                                    <div className="panel-footer">
                                        <p className="text-small text-center link-style">What's included</p>
                                        <ul className="pricing-features">
                                            <li><p>Over <strong>2 million</strong> requests per month</p></li>
                                            <li><p>All Startup Features</p></li>
                                            <li><p>Telephone and Discord Technical Support</p></li>
                                            <li><p>Optional On Premise Installation</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

TheComponent.propTypes = {
    children: RequiredElement,
    toggleComponent: OptionalFunc,
    title: RequiredString,
    defaultValue: OptionalBool,
};

module.exports = ConfigProvider(TheComponent);