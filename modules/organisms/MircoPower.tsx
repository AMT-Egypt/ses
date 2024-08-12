import ThreeLinesIcon from '../icons/threeLines'
import ShineHeadLine from 'modules/molcules/shineHeadline'
import MicrosoftIcon from 'modules/icons/microsoftIcon'
import Image from 'next/image';
import TrueIcon from 'modules/icons/TrueIcon';
import NumThreeIcon from 'modules/icons/NumThreeIcon';
import NumTwoIcon from 'modules/icons/NumTwoIcon';
import NumOneIcon from 'modules/icons/NumOneIcon';

const MircoPower = ({play}) => {
    return (
        <div style={{display:`${play==="1" ? 'block' : 'none'}`}} className="content-section" >
            <div className="sub-section">
                <ThreeLinesIcon /> <p>Products</p>
            </div>
            <ShineHeadLine text={<span>Microsoft Power BI</span>} />
            <div className="inner-content">
                <p>Transform your data into actionable insights with Microsoft Power BI. This powerful business intelligence tool allows you to easily visualize and analyze your data, uncovering hidden trends and patterns. Empower everyone in your organization to make data-driven decisions and achieve improved performance with Power BI.</p>
                <div className="icon"><MicrosoftIcon /></div>
                <Image src={"/images/products/firstVariant.png"} width="1000" height="600" alt='image' />
            </div>
            <div className='feature'>
                <h3>Key Features</h3>
                <div className='inter'>
                    <p><NumOneIcon/></p>
                    <div>
                        <h4>Interactive Dashboards</h4>
                        <p>Create interactive dashboards that allow you to visualize data in real-time. With intuitive drag-and-drop functionality, you can customize dashboards to meet your specific business needs.</p>
                    </div>
                </div>
                <div className='inter real'>
                    <p><NumTwoIcon/></p>
                    <div>
                        <h4>Real-time Data Visualization</h4>
                        <p>Analyze your data as it changes with real-time updates. This feature ensures you have the latest insights at your fingertips, helping you make informed decisions quickly.</p>
                    </div>
                </div>
                <div className='inter cust'>
                    <p><NumThreeIcon/></p>
                    <div>
                        <h4>Customizable Reports</h4>
                        <p>Generate reports tailored to your business requirements. Power BI offers a variety of templates and customization options, enabling you to present data in a format that best suits your audience.</p>
                    </div>
                </div>
            </div>
            <div className="benefit">
                <h3>Benefits</h3>
                <p>Transform Your Business with Data-Driven Insights</p>
                <div>
                    <TrueIcon/>
                    <span>Enhance decision-making with data-driven insights.</span>
                </div>
                <div>
                    <TrueIcon/>
                    <span>Improve operational efficiency.</span>
                </div>
                <div>
                    <TrueIcon/>
                    <span>Foster a data-driven culture within your organization.</span>
                </div>
            </div>
            <div className="use">
                <h3>Use Cases</h3>
                <div className='grand'>
                    <div className='parent'>
                        <div className='child'>
                            <h4>Sales Performance Analysis</h4>
                            <p>Analyze your sales data to identify trends, track performance, and uncover insights that can help improve sales strategies and outcomes. Power BI&apos;s interactive dashboards allow you to visualize sales metrics and make data-driven decisions.</p>
                        </div>
                        <div className='child'>
                            <h4>Inventory Management</h4>
                            <p>Optimize your inventory management with real-time tracking and analysis. Power BI helps you monitor stock levels, identify trends in inventory usage, and make informed decisions to reduce costs and improve efficiency.</p>
                        </div>
                    </div>
                    <div className='parent'>
                        <div className='child'>
                            <h4>Customer Behavior Analysis</h4>
                            <p>Understand customer behavior and preferences by analyzing data from various touchpoints. Power BI enables you to segment customers, track engagement, and tailor your marketing strategies to meet customer needs.</p>
                        </div>
                        <div className='child'>
                            <h4>Financial Reporting</h4>
                            <p>Simplify your financial reporting process with real-time data visualization and customizable reports. Power BI helps you track financial performance, monitor key financial indicators, and create detailed financial statements effortlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MircoPower;
